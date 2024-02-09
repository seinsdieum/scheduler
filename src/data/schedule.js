const createElement = (time, name, auditory, teacher, type, weekRelation) => {
    return {time: time, name: name, auditory: auditory, teacher: teacher,type:type, weekRelation: weekRelation}
}

const mondaySchedule = [
    createElement('14:40', 'Мат прога', '200-3a', 'Бурмакова', 'лк'),
    createElement('16:30', 'ТРПИ', '301-4', 'Кудлацкая', 'лк'),
    createElement('18:05', 'Шизоэкономия', '239-4', 'пизда', 'пз', 1),
    createElement('18:05', 'Дизайн', '202-4', 'Кантарович', 'лр', 2),
]

const tuesdaySchedule = [
    createElement('14:40', 'БД', '110а-1', 'Харланович', 'лр'),
    createElement('16:30', 'ТРПИ', '324-1', 'Кудлацкая', 'лк', 1),
    createElement('16:30', 'РиАТ', '209-1', 'Сухорукова', 'лр',2),
    createElement('18:05', 'Дизайн', '200-3а', 'Кантарович', 'лк', 2),
]

const wednesdaySchedule = [
    createElement('14:40', 'Физра', '', '', 'пз'),
    createElement('16:30', 'Шизоэкономия', '401-4', 'пизда', 'лк'),
    createElement('18:05', 'Мат прога', '202-4', 'Леди Димитреску', 'лр'),
    createElement('19:40', 'ТПВИ', '204-1', 'Гончар', 'лр' ),
]
const thirsdaySchedule = [
    createElement('14:40', 'Комп гео', '324-1', 'Дятко', 'лр'),
    createElement('16:30', 'Комп гео', '132-4', 'Дятко', 'лк', 1),
    createElement('16:30', 'РиАТ', '132-4', 'Сухорукова', 'лк', 2),
    createElement('18:05', 'ООП', '132-4', 'Мущук', 'лк'),
    createElement('19:40', 'ТРПИ', '324-1', 'Кудлацкая', 'лр'),
]

const fridaySchedule = [
    createElement('14:40', 'Физра', '', '', 'пз'),
    createElement('16:30', 'ООП', '209-1', 'Сухорукова', 'лр'),
    createElement('18:05', 'ТПВИ', '114-4', 'Гончар', 'лк'),
    createElement('19:40', 'Философия', '336-4', 'Подручный', 'пз'),
]

const saturdaySchedule = [
    createElement('9:35', 'БД', '222-4', 'Нистюк', 'лк'),
    createElement('11:25', 'Философия', '408-2', 'Подручный', 'лк'),
]


export const weekSchedule = [
    {day: 'Понедельник', schedule: mondaySchedule},
    {day: 'Вторник', schedule: tuesdaySchedule},
    {day: 'Среда', schedule: wednesdaySchedule},
    {day: 'Четверг', schedule: thirsdaySchedule},
    {day: 'Пятница', schedule: fridaySchedule},
    {day: 'Суббота', schedule: saturdaySchedule}
]

