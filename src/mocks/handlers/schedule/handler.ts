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

export const test = '';
