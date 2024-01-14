import React, { useState } from 'react';
import { FiCamera } from 'react-icons/fi';
import imageCompression from 'browser-image-compression';
import usePatchProfileImageQuery from '@/hooks/query/user/usePatchProfileImageQeury';
import Avatar from '@/components/common/Avatar';

const PhotoEdit = () => {
  const [profileImageURL, setProfileImageURL] = useState<
    string | ArrayBuffer | null
  >('');
  const { profileImageUpdateIsMutate } = usePatchProfileImageQuery();

  const handleProfileImageUpdate = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];

    const formData = new FormData();
    if (!file) return;
    formData.append('file', file);

    const options = {
      maxSizeMB: 2,
      maxWidthOrHeight: 100
    };

    try {
      const compressedFile = await imageCompression(file, options);
      setProfileImageURL(compressedFile ? null : String);

      // resize된 이미지의 url을 받아 fileUrl에 저장
      const promise = imageCompression.getDataUrlFromFile(compressedFile);
      promise.then(result => {
        setProfileImageURL(result);
      });
    } catch (error) {
      console.log(error);
    }

    // 미리보기
    const fileRead = new FileReader();
    fileRead.readAsDataURL(file);
    fileRead.onload = function () {
      setProfileImageURL(fileRead.result);
    };
    // 파일 업로드
    profileImageUpdateIsMutate(formData);
  };

  const handleProfileImageDel = () => {};
  return (
    <div className="text-center">
      <div className="avatar m-auto w-full justify-center relative mb-7">
        {profileImageURL ? (
          <div className="w-32 rounded-full">
            <img src={`${profileImageURL}`} alt="김친구" />
          </div>
        ) : (
          <div className="w-32 rounded-full bg-gray3">
            <Avatar />
          </div>
        )}
        <label
          htmlFor="photoEdit"
          className="absolute -bottom-5 left-0 right-0 m-auto bg-gray2 w-9 h-9 rounded-full flex justify-center items-center"
        >
          <FiCamera className="text-bk" />
        </label>
        <input
          type="file"
          name="photoEdit"
          id="photoEdit"
          onChange={handleProfileImageUpdate}
          className="hidden"
        />
      </div>
      <button
        type="button"
        className=" text-body3 text-gray4"
        onClick={handleProfileImageDel}
      >
        프로필 삭제하기
      </button>
    </div>
  );
};

export default PhotoEdit;
