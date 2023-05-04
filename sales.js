const calculateSalesTax = function (salesData, taxRates) {
  const result = {};
  //const array = [];
  let taxOfProvince =0;
  const result1 = Object.keys(taxRates);
  for(const item of result1){
    taxOfProvince = taxRates[item]
    // if(item === "AB"){
    //   array.push(taxRates[item]);
    //}
  }
  for (const keys of salesData) {
    let sales = 0;
    let tax = 1;
    const result2 = Object.values(keys);    
    const result3 = result2[2];
    for (let i = 0; i < result3.length; i++) {
      sales += result3[i];
    }
    if (result2[1] === "BC") {
      tax = sales * taxOfProvince;
    }
    console.log(tax);
    return result2;
  }

}
const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];
calculateSalesTax(companySalesData, salesTaxRates);