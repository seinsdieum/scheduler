const createElement = (time, name, auditory, teacher, type, weekRelation) => {
    return {time: time, name: name, auditory: auditory, teacher: teacher,type:type, weekRelation: weekRelation}
}

const lk = 'лк'
const pz = 'пз'
const lr = 'лр'

const first = '8:00'
const second = '9:35'
const third = '11:25'
const fourth = '13:00'

const fizra = 'Физ-ра'
const tpvi = 'ТПВИ'
const bzc = 'БЖЧ'
const os = 'ОС'
const tpo = 'ТПО'
const bd = 'БД'
const psp = 'ПСП'
const sp = 'СП'
const kms = 'КМС'
const pskp = 'ПСКП'


const mondaySchedule = [
    createElement(second, tpvi, '204-1', '-', lr, 1),
    createElement(second, bzc, '146, 153-4', '-', lr, 2),
    createElement(third, os, '209-1', '-', lr),
]

const tuesdaySchedule = [
    createElement(first, bd, '137-4', 'Нистюк', lk),
    createElement(second, psp, '413-1', '-', lr),

]

const wednesdaySchedule = [
    createElement(first, psp, '100-3a', 'Шиман', lk),
    createElement(second, bzc, '100-3a', 'Штепа', lk),
    createElement(third, tpo, '202-4', '-', lr),


]
const thirsdaySchedule = [
    createElement(first, os, '100-3a', 'Пилинога', lk),
    createElement(second, kms, '301-1', '-', lr, 1), //1
    createElement(second, bzc, '151-4', '-', lr, 2), //2
    createElement(third, fizra, '', '', pz),

]

const fridaySchedule = [
    createElement(first, sp, '132-4', 'Бернацкий', lk),
    createElement(second, tpvi, '132-4', 'Смелов', lk, 1),
    createElement(second, kms, '132-4', 'Гурин', lk, 2),
    createElement(third, bd, '200a-4', '-', lr),

]

const saturdaySchedule = [
    createElement(first, tpo, '313-1', 'Сухорукова', lk),
    createElement(second, pskp, '313-1', 'Дубовик', lk),
    createElement(third, sp, '301-1', '-', lr),
    createElement(fourth, pskp, '204-1', '-', lr),

]


export const weekSchedule = [
    {day: 'Понедельник', schedule: mondaySchedule},
    {day: 'Вторник', schedule: tuesdaySchedule},
    {day: 'Среда', schedule: wednesdaySchedule},
    {day: 'Четверг', schedule: thirsdaySchedule},
    {day: 'Пятница', schedule: fridaySchedule},
    {day: 'Суббота', schedule: saturdaySchedule}
]

