'use client';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const VerticalLine = () => {
  const timelineItems = [
    {
      title: 'Event 1',
      description: "orem ipsum dolor, sit amet consectetur adipisicing elit. Expedita sed commodi reiciendis aut perferendis asperiores voluptatum aliquam necessitatibus beatae? Officia ipsum itaque quasi natus velit, qui autem eveniet dolore cupiditate.",
    },
    {
      title: 'Event 2',
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi mollitia optio ea quam magni architecto minima cumque, quo deserunt quos voluptates voluptatum magnam error tempora eius. Nemo similique quidem exercitationem?",
    },
    {
      title: 'Event 3',
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis ipsam a praesentium omnis, provident dolores eum molestias voluptate laudantium repellat unde vitae numquam, fugit error ipsa obcaecati repudiandae sit doloribus.",
    },
  ];

  return (
    <VerticalTimeline>
      {timelineItems.map((item: any) => (
        <VerticalTimelineElement
          visible={true}
          key={item.title}
          icon={<div className='flex justify-center items-center w-full h-full'>1</div>}
          iconStyle={{
            background: '#EA8400',
          }}
        >
          <div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
