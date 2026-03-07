
export type TimelineItem = {
  date: string;
  titleKey: string;
  subtitleKey: string;
  descriptionKey: string;
};

export const timelineData: TimelineItem[] = [
  {
    date: '2015.4 - 2018.3',
    titleKey: 'timeline.highschool.title',
    subtitleKey: 'timeline.highschool.subtitle',
    descriptionKey: 'timeline.highschool.desc',
  },
  {
    date: '2018.4 - 2020.3',
    titleKey: 'timeline.advics.title',
    subtitleKey: 'timeline.advics.subtitle',
    descriptionKey: 'timeline.advics.desc',
  },
  {
    date: '2021.3 - 2021.8',
    titleKey: 'timeline.trajectory.title',
    subtitleKey: 'timeline.trajectory.subtitle',
    descriptionKey: 'timeline.trajectory.desc',
  },
  {
    date: '2022.4 - 2024.3',
    titleKey: 'timeline.short.title',
    subtitleKey: 'timeline.short.subtitle',
    descriptionKey: 'timeline.short.desc',
  },
  {
    date: '2024.4 - 2026.3',
    titleKey: 'timeline.university.title',
    subtitleKey: 'timeline.university.subtitle',
    descriptionKey: 'timeline.university.desc',
  },
  {
    date: '2026.4 - Present',
    titleKey: 'timeline.grad.title',
    subtitleKey: 'timeline.grad.subtitle',
    descriptionKey: 'timeline.grad.desc',
  },
];
