function cardDistribution(arr) {
    let customer = [];
    for (let i = 0; i < arr.length; i++) {
        let districtName = arr[i].district.slice(0, 2).toUpperCase();
        let currentYear = arr[i].currentYear.toString().substr(-2)
        let postalCode = arr[i].postNo.toString().slice(0, 2)
        let birthYear = arr[i].birthYear
        let concatNumber = districtName + currentYear + postalCode + birthYear
        let lastDigit = i + 1
        let padNumber = lastDigit.toString().padStart(6, 0)
        let cardNumber = concatNumber + padNumber

        let obj = { cardNumber }

        if (lastDigit % 2 === 0) {
            obj.gift = 'R'
        }
        else {
            obj.gift = 'W'
        }

        obj.priority = arr[i].priority

        customer[i] = obj
    }
    const sortedCustomer = customer.sort((a, b) => (a.priority > b.priority) ? 1 : -1)
    return sortedCustomer

}