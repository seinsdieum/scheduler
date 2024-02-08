const createElement = (time, name, auditory, teacher, type, weekRelation) => {
    return {time: time, name: name, auditory: auditory, teacher: teacher,type:type, weekRelation: weekRelation}
}

const mondaySchedule = [
    createElement('14:40', 'Мат прога', '200-3a', 'Бурмакова', 'лк'),
    createElement('16:30', 'ТРПИ', '301-4', 'Кудлацкая', 'лк'),
    createElement('18:05', 'Шизоэкономия', '239-4', 'хз', 'пз', 1),
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
    createElement('14:40', 'Шизоэкономия', '401-4', 'Новикова', 'лк'),
    createElement('18:05', 'Мат прога', '202-4', 'хз', 'лр'),
    createElement('19:40', 'ТПВИ', '204-1', ',ehvfrjdf', 'лр' ),
]
const thirsdaySchedule = [
    createElement('14:40', 'Комп гео', '324-1', 'Дятко', 'лр'),
    createElement('16:30', 'Комп гео', '132-4', 'Дятко', 'лк', 1),
    createElement('16:30', 'РиАТ', '132-4', ',ehvfrjdf', 'лк', 2),
    createElement('18:05', 'ООП', '132-4', 'Мущук', 'лк'),
    createElement('19:40', 'ТРВИ', '324-1', 'Кудлацкая', 'лр'),
]

const fridaySchedule = [
    createElement('14:40', 'Физра', 'Зал епт', 'решайте сами', 'лк'),
    createElement('16:30', 'ООП', '209-1', 'рифмы и панченко', 'лр'),
    createElement('18:05', 'ТПВИ', '114-4', 'клевый чел', 'лр'),
    createElement('19:40', 'Философия', '336-4', ',ehvfrjdf', 'пз'),
]

const saturdaySchedule = [
    createElement('9:35', 'БД', '222-4', 'Нистюк', 'лк'),
    createElement('11:25', 'Философия', '408-2', ',ehvfrjdf', 'лк'),
    createElement('14:40', 'Пить пиво', 'Где угодно!', '', 'пз')
]


export const weekSchedule = [
    {day: 'Понедельник', schedule: mondaySchedule},
    {day: 'Вторник', schedule: tuesdaySchedule},
    {day: 'Среда', schedule: wednesdaySchedule},
    {day: 'Четверг', schedule: thirsdaySchedule},
    {day: 'Пятница', schedule: fridaySchedule},
    {day: 'Суббота', schedule: saturdaySchedule}
]

