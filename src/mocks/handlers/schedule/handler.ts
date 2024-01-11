import { rest } from 'msw';
import { schedulesList } from '@/mocks/data';

// 채팅방 리스트
export const getMyScheduleList = rest.get('/schedules', (req, res, ctx) => {
  const size = Number(req.url.searchParams.get('size')) || 10;
  const page = Number(req.url.searchParams.get('page')) || 1;

  const startIndex = (page - 1) * size;

  const newSchedulesList = schedulesList.slice(startIndex, startIndex + size);

  return res(ctx.status(200), ctx.json(newSchedulesList));
});

export const getMyScheduleDetail = rest.get(
  '/schedules/:scheduleId',
  async (req, res, ctx) => {
    const { scheduleId } = req.params;
    const noticeId = req.url.searchParams.get('noticeId');
    return res(
      ctx.status(200),
      ctx.json({
        title: '제목',
        contents: '내용',
        scheduleDateTime: '2023-12-25T 13:00',
        locationExplanation: '위치 설명',
        latitude: 33.46312123233534,
        longitude: 126.56833027063311,
        status: 'ONGOING',
        remindDateTime: '2023-12-25T 11:00',
        friendList: [
          {
            memberId: 1,
            name: 'name',
            profileImageUrl: '',
            email: '3333@naver.com'
          }
        ]
      })
    );
  }
);
