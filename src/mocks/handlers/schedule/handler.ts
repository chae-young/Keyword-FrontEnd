import { rest } from 'msw';
import { schedulesList } from '@/mocks/data';

// 스케쥴 리스트
export const getMyScheduleList = rest.get('/schedules', (req, res, ctx) => {
  const size = Number(req.url.searchParams.get('size')) || 10;
  const page = Number(req.url.searchParams.get('page')) || 1;

  const startIndex = (page - 1) * size;

  const newSchedulesList = schedulesList.slice(startIndex, startIndex + size);

  return res(ctx.status(200), ctx.json(newSchedulesList));
});

export const postMySchedule = rest.post('/schedules', async (req, res, ctx) =>
  res(ctx.status(200), ctx.json({ isScheduleRequest: true }))
);

export const patchMySchedule = rest.patch(
  '/schedules/:scheduleId',
  async (req, res, ctx) => res(ctx.status(200), ctx.json({ scheduleId: true }))
);

export const getMyScheduleDetail = rest.get(
  '/schedules/:scheduleId',
  async (req, res, ctx) =>
    // const { scheduleId } = req.params;
    // const noticeId = req.url.searchParams.get('noticeId');
    res(
      ctx.status(200),
      ctx.json({
        organizerId: 1,
        title: '제목',
        contents: '내용',
        scheduleDateTime: '2023-12-25T13:00',
        locationExplanation: '위치 설명',
        latitude: 33.46312123233534,
        longitude: 126.56833027063311,
        status: 'ONGOING',
        remindDateTime: '2023-12-25T11:00',
        friendList: [
          {
            memberId: 1,
            name: 'name',
            profileImageUrl: '',
            email: '3333@naver.com'
          }
        ]
      })
    )
);

export const deleteMySchedule = rest.delete(
  '/schedules/:scheduleId',
  (req, res, ctx) => {
    const { scheduleId } = req.params;
    console.log(scheduleId, req.params);
    if (scheduleId) {
      return res(
        ctx.status(200),
        ctx.json({
          isScheduleDelete: true
        })
      );
    }
    return res(
      ctx.json({
        errorMessage: '해당 일정이 없습니다.'
      })
    );
  }
);
