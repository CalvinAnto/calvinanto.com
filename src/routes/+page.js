let bday = new Date('2000/11/29 00:00:00 GMT+7');

var temp = new Date(Date.now() - bday.getTime());

var age = temp.getUTCFullYear() - 1970;

console.log(age);

export const load = () => {
    return {
        age,
    }
}