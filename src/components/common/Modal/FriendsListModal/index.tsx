import React from 'react';

const FriendListModal = () => (
  <div>
    <ul>
      <li>
        <div className="form-control">
          <label className="cursor-pointer label">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="fdsfdfds"
                />
              </div>
            </div>
            <span className="label-text">Remember me</span>
            <input
              type="checkbox"
              checked={false}
              className="checkbox checkbox-warning"
            />
          </label>
        </div>
      </li>
      <li>
        <div className="form-control">
          <label className="cursor-pointer label">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="fdsfdfds"
                />
              </div>
            </div>
            <span className="label-text">Remember me</span>
            <input
              type="checkbox"
              checked={false}
              className="checkbox checkbox-warning"
            />
          </label>
        </div>
      </li>
    </ul>
  </div>
);

export default FriendListModal;
