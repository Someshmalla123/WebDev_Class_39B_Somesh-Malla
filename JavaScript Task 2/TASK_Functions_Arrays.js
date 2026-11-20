//Question 1 Smart Electricity Bill Calculator

const calculateBill = (units) => {
    let bill = 0;

    if (units <= 20) {
        bill = units * 5;
    } else if (units <= 50) {
        bill = (20 * 5) + ((units - 20) * 7);
    } else {
        bill = (20 * 5) + (30 * 7) + ((units - 50) * 10);
    }

    return bill + 50;
};

const displayBill = (name, units, callback) => {
    const totalBill = callback(units);

    console.log("Customer:", name);
    console.log("Units Consumed:", units);
    console.log("Total Electricity Bill: Rs.", totalBill);
};

displayBill("Ram", 65, calculateBill);

// Question 2 Student Result Processing System

const calculateAverage = (m1, m2, m3) => {
    return (m1 + m2 + m3) / 3;
};

const getDivision = (average) => {
    if (average >= 70) {
        return "First Division";
    } else if (average >= 60) {
        return "Second Division";
    } else if (average >= 50) {
        return "Third Division";
    } else {
        return "Fail";
    }
};

const processResult = (name, m1, m2, m3, callback) => {
    const average = callback(m1, m2, m3);
    const division = getDivision(average);

    console.log("Student:", name);
    console.log("Average:", average);
    console.log("Division:", division);
};

processResult("Sita", 75, 80, 70, calculateAverage);

// Question 3 Online Shopping Discount System

const calculateDiscount = (amount) => {
    if (amount >= 5000) {
        return 20;
    } else if (amount >= 3000) {
        return 15;
    } else if (amount >= 1000) {
        return 10;
    } else {
        return 0;
    }
};

const calculateFinalPrice = (amount, discount) => {
    return amount - (amount * discount / 100);
};

const checkout = (customerName, amount, callback) => {
    const discount = calculateDiscount(amount);
    const finalPrice = callback(amount, discount);

    console.log("Customer:", customerName);
    console.log("Original Price: Rs.", amount);
    console.log("Discount:", discount + "%");
    console.log("Final Price: Rs.", finalPrice);
};

checkout("Nikesh", 6000, calculateFinalPrice);

// Question 4 Movie Ticket Booking System

const getTicketPrice = (age) => {
    if (age < 12) {
        return 150;
    } else if (age <= 17) {
        return 200;
    } else if (age <= 59) {
        return 300;
    } else {
        return 200;
    }
};

const calculateTotal = (price, quantity) => {
    return price * quantity;
};

const applyDiscount = (total, quantity) => {
    if (quantity >= 5) {
        return total * 0.10;
    }

    return 0;
};

const bookTicket = (name, age, quantity, callback) => {
    const ticketPrice = getTicketPrice(age);
    const total = calculateTotal(ticketPrice, quantity);
    const discount = callback(total, quantity);
    const finalAmount = total - discount;

    console.log("Customer:", name);
    console.log("Age:", age);
    console.log("Tickets:", quantity);
    console.log("Total Before Discount: Rs.", total);
    console.log("Discount: Rs.", discount);
    console.log("Final Amount: Rs.", finalAmount);
};

bookTicket("Hari", 25, 5, applyDiscount);

// Question 5 Employee Salary Processing System

const calculateBonus = (salary) => {
    if (salary >= 40000) {
        return salary * 0.10;
    }

    return salary * 0.05;
};

const calculateTax = (salary) => {
    return salary * 0.05;
};

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
    const bonus = bonusCallback(salary);
    const tax = taxCallback(salary);

    return {
        bonus: bonus,
        tax: tax,
        netSalary: salary + bonus - tax
    };
};

const generatePayslip = (name, salary, callback) => {
    const result = callback(salary, calculateBonus, calculateTax);

    console.log("Employee:", name);
    console.log("Basic Salary: Rs.", salary);
    console.log("Bonus: Rs.", result.bonus);
    console.log("Tax: Rs.", result.tax);
    console.log("Net Salary: Rs.", result.netSalary);
};

generatePayslip("Ram", 50000, calculateNetSalary);

// Question 6 Food Delivery Charge Calculator

const calculateDelivery = (distance) => {
    if (distance <= 2) {
        return 30;
    }

    return 30 + ((distance - 2) * 15);
};

const checkFreeDelivery = (orderAmount) => {
    return orderAmount >= 1000;
};

const processOrder = (customer, distance, orderAmount, callback) => {
    const deliveryCharge = callback(distance, orderAmount);

    console.log("Customer:", customer);
    console.log("Order Amount: Rs.", orderAmount);
    console.log("Distance:", distance, "km");
    console.log("Delivery Charge: Rs.", deliveryCharge);
};

const getFinalDeliveryCharge = (distance, orderAmount) => {
    if (checkFreeDelivery(orderAmount)) {
        return 0;
    }

    return calculateDelivery(distance);
};

processOrder("Shyam", 5, 800, getFinalDeliveryCharge);

// Question 7 ATM Withdrawal System

const validateWithdrawal = (amount, balance) => {
    return amount > 0 && amount % 500 === 0 && (amount + 25) <= balance;
};

const withdrawMoney = (amount, balance, callback) => {
    if (callback(amount, balance)) {
        balance = balance - amount - 25;

        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs. 25");
    } else {
        console.log("Withdrawal Failed!");
        console.log("Invalid amount or insufficient balance.");
    }

    console.log("Remaining Balance: Rs.", balance);
};

withdrawMoney(3000, 10000, validateWithdrawal);

// Question 8 Restaurant Order Management System

const getFoodPrice = (foodName) => {
    const menu = {
        burger: 250,
        pizza: 500,
        momo: 150,
        chowmein: 180
    };

    return menu[foodName.toLowerCase()] || 0;
};

const calculateServiceCharge = (total) => {
    return total * 0.05;
};

const calculateOrder = (foodName, quantity, callback) => {
    const price = getFoodPrice(foodName);

    if (price === 0 || quantity <= 0) {
        return null;
    }

    return callback(price, quantity);
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
    const foodAmount = callback(foodName, quantity);

    if (foodAmount === null) {
        console.log("Invalid food item or quantity.");
        return;
    }

    const serviceCharge = calculateServiceCharge(foodAmount);
    const finalAmount = foodAmount + serviceCharge;

    console.log("Customer:", customerName);
    console.log("Food:", foodName);
    console.log("Quantity:", quantity);
    console.log("Food Amount: Rs.", foodAmount);
    console.log("Service Charge: Rs.", serviceCharge);
    console.log("Final Amount: Rs.", finalAmount);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);

// Question 9 Mobile Recharge System

const calculateBonus = (amount) => {
    if (amount >= 1000) {
        return amount * 0.15;
    } else if (amount >= 500) {
        return amount * 0.10;
    } else if (amount >= 100) {
        return amount * 0.05;
    } else {
        return 0;
    }
};

const calculateTotalBalance = (amount, bonus) => {
    return amount + bonus;
};

const recharge = (number, amount, callback) => {
    const bonus = calculateBonus(amount);
    const totalBalance = callback(amount, bonus);

    console.log("Mobile Number:", number);
    console.log("Recharge Amount: Rs.", amount);
    console.log("Bonus Received: Rs.", bonus);
    console.log("Total Balance: Rs.", totalBalance);
};

recharge("9800000000", 1000, calculateTotalBalance);

// Question 10 Smart Function Based Calculator

const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
};

const calculate = (a, b, operationCallback) => {
    return operationCallback(a, b);
};

console.log("Addition: 20 + 10 =", calculate(20, 10, add));
console.log("Subtraction: 20 - 10 =", calculate(20, 10, subtract));
console.log("Multiplication: 20 * 10 =", calculate(20, 10, multiply));
console.log("Division: 20 / 10 =", calculate(20, 10, divide));
console.log("Division: 20 / 0 =", calculate(20, 0, divide));



