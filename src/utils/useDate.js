export const transformDate = (start) => {
    return new Date(start).toLocaleDateString('ru', {day: '2-digit', month: "long"})
}