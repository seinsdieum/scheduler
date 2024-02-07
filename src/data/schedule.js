const createElement = (time, name, auditory, teacher, type, weekRelation) => {
    return {time: time, name: name, auditory: auditory, teacher: teacher,type:type, weekRelation: weekRelation}
}

const mondaySchedule = [
    createElement('14:40', 'Мат прога', '200-3a', 'Бурмакова', 'лк'),
    createElement('16:30', 'ТРПИ', '301-4', 'Кудлацкая', 'лк'),
    createElement('18:05', 'Политхуйня', '239-4', 'хз', 'пз', 1),
    createElement('18:05', 'Дизайн', '202-4', 'хз', 'лр', 2),
]

const tuesdaySchedule = [
    createElement('14:40', 'БД', '200-3a', 'Бурмакова', 'лк'),
    createElement('16:30', 'ТРПИ', '324-1', 'Кудлацкая', 'лк', 1),
    createElement('16:30', 'РиАТ', '209-1', 'хз', 'лк',2),
    createElement('18:05', 'Дизайн', '200-3ф', 'Кантарович', 'лк', 2),
]

const wednesdaySchedule = [
    createElement('14:40', 'Физра', 'Зал', ',ehvfrjdf', 'лк'),
    createElement('14:40', 'Политхуйня', '401-4', 'Новикова', 'лк'),
    createElement('18:05', 'Мат прога', '202-4', 'хз', 'лр'),
    createElement('19:40', 'ТПВИ', '204-1', ',ehvfrjdf', 'лр' ),
]
const thirsdaySchedule = [
    createElement('14:40', 'Комп гео', '324-1', 'хз', 'лр'),
    createElement('16:30', 'Мат прога', '200-3a', ',ehvfrjdf', 'лк', 1),
    createElement('16:30', 'Комп гео q', '200-3a', ',ehvfrjdf', 'лк', 2),
    createElement('14:40', 'Мат прога', '200-3a', ',ehvfrjdf', 'пз', 1),
    createElement('14:40', 'Мат прога', '200-3a', ',ehvfrjdf', 'лр', 2),
]

const fridaySchedule = [
    createElement('14:40', 'Мат прога', '200-3a', ',ehvfrjdf', 'лк'),
    createElement('14:40', 'Мат прога', '200-3a', ',ehvfrjdf', 'лк'),
    createElement('14:40', 'Мат прога', '200-3a', ',ehvfrjdf', 'пз', 1),
    createElement('14:40', 'Мат прога', '200-3a', ',ehvfrjdf', 'лр', 2),
]

const saturdaySchedule = [
    createElement('14:40', 'Мат прога', '200-3a', ',ehvfrjdf', 'лк'),
    createElement('14:40', 'Мат прога', '200-3a', ',ehvfrjdf', 'лк'),
    createElement('14:40', 'Мат прога', '200-3a', ',ehvfrjdf', 'пз', 1),
    createElement('14:40', 'Мат прога', '200-3a', ',ehvfrjdf', 'лр', 2),
]


export const weekSchedule = [
    {day: 'Понедельник', schedule: mondaySchedule},
    {day: 'Вторник', schedule: tuesdaySchedule},
    {day: 'Среда', schedule: wednesdaySchedule},
    {day: 'Четверг', schedule: thirsdaySchedule},
    {day: 'Пятница', schedule: fridaySchedule},
    {day: 'Суббота', schedule: saturdaySchedule}
]

