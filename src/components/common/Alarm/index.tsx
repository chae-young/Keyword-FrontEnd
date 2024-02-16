import {
  EventSourcePolyfill,
  NativeEventSource
  // MessageEvent,
  // Event
} from 'event-source-polyfill';
import { FaRegBell } from '@react-icons/all-files/fa/FaRegBell';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from '@/constants/auth';

const Alarm = () => {
  const [realtimeData, setRealtimeData] = useState(false);

  const EventSource = EventSourcePolyfill || NativeEventSource;
  const eventSource = useRef<null | EventSource>(null);

  useEffect(() => {
    const fetchSSE = () => {
      eventSource.current = new EventSource(
        `${import.meta.env.VITE_SERVER}/notification/subscribe`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
          },
          // heartbeatTimeout: 3600000, // 서버에서 1시간 제한
          withCredentials: true
        }
      );
      eventSource.current.addEventListener('sse', () => {
        // e: MessageEvent
        // const res = await e.data;
        // const parsedData = JSON.parse(res);
        setRealtimeData(true);
      });

      eventSource.current.onerror = async () => {
        // e: Event
        eventSource.current?.close();
        // 재연결
        setTimeout(fetchSSE, 3000);
        // console.log(
        //   (event as ErrorEvent).error.message.includes('No activity')
        // );
        // if (!event.error.message.includes('No activity'))
      };
      eventSource.current.onopen = () => {
        // e: Event
        // console.log('연결', event.data);
      };
    };
    fetchSSE();
    return () => {
      eventSource.current?.close();
    };
  }, []);
  return (
    <>
      <Link
        to="/alarm"
        className="w-14 h-full flex justify-center items-center absolute right-0 top-0"
      >
        <div className="relative">
          <FaRegBell className="text-xl text-bk" />
          {realtimeData && (
            <span className="absolute -top-1 -right-2 w-2 h-2 bg-red-500 rounded" />
          )}
        </div>
      </Link>
      {/* <button onClick={fetchData} type="button">
        요청
      </button> */}
    </>
  );
};
export default Alarm;
