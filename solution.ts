type FormatType = string | number | boolean;
const formatValue = (value: FormatType): FormatType | undefined => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  }

  if (typeof value === 'number') {
    return value * 10;
  }

  if (typeof value === 'boolean') {
    return !value;
  }
};







const getLength = (value: string | unknown[]): number => {
  if (typeof value === 'string' || Array.isArray(value)) { 
    return value.length;
  }
  return -1;
}


console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));











class Person {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}
















type RatingType = { title: string, rating: number }

const filterByRating = (value: RatingType[]): RatingType[] => {
  return value.filter(item => item.rating >= 4);
};














type UserType = { id: number, name: string, email: string, isActive: boolean };

const filterActiveUsers = (value: UserType[]): UserType[] => {
  return value.filter(user => user.isActive === true);
}















interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}


const printBookDetails = (obj: Book): string => {
  return `Title: ${obj.title}, Author: ${obj.author}, Published: ${obj.publishedYear}, Available: ${obj.isAvailable}`;
}












const getUniqueValues = (arr1: number[], arr2: number[]): number[] => {
  const totalArr: number[] = [...arr1, ...arr2];
  let uniqueArr: number[] = [];
  for (let i = 0; i < totalArr.length; i++){
    if (!uniqueArr.includes(totalArr[i])) {
      uniqueArr.push(totalArr[i]);
    }
  }
  return uniqueArr;
}









type ProductType = {name: string, price: number, quantity: number, discount?: number};

const calculateTotalPrice = (value: ProductType[]): number => {
  const totalPrice: number = value.reduce((total, product) => {
    const getDiscount = product.discount ? (product.discount / 100) : 0;
    const price = product.price * product.quantity;
    return (total + price - (price * getDiscount));
  }, 0)
  return totalPrice;
}