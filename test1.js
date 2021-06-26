var arr = [{
    name: 'apple',
    price: 100
},

{
    name: 'guava',
    price: 50
},

{
    name: 'pear',
    price: 20
},

{
    name: 'orange',
    price: 70
}

]

arr.reduce((acc, item) => {
    return acc + item.price
}, 50)