// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const color = {yellow:'Yellow', 
               pink:'Pink', 
               white:'White', 
               purple : 'Purple', 
               blue : 'Blue', 
               black : 'Black', 
               grey : 'Grey'}

const restaurant = {bento:'Bento',
                    sushi:'Sushi',
                    pancake:'Pancake',
                    eggy:'Eggy',
                    tempura:'Tempura',
                    padang:'Padang',
                    tteok:'Tteok',
                    katsu:'Katsu',
                    geprek:'Geprek'
                }

/**Monica data */
let monicaColor = new Set();
monicaColor.add(color.yellow);
monicaColor.add(color.pink);
monicaColor.add(color.white);
monicaColor.add(color.purple);

let monicaResto = new Set();
monicaResto.add(restaurant.bento);
monicaResto.add(restaurant.sushi);
monicaResto.add(restaurant.pancake);
monicaResto.add(restaurant.eggy);
monicaResto.add(restaurant.tempura);
monicaResto.add(restaurant.bento);
monicaResto.add(restaurant.eggy);
monicaResto.add(restaurant.padang);
monicaResto.add(restaurant.tteok);
monicaResto.add(restaurant.sushi);
monicaResto.add(restaurant.sushi);

let monicaEducation = [{ name: "SD 01", city: "Jakarta", graduate: "2016" },
                       { name: "SMP 02", city: "Jakarta", graduate: "2019" },
                       { name: "SMA 03", city: "Tangerang" },
                    ]

/**Wendy data */
let wendyColor = new Set();
wendyColor.add(color.blue);
wendyColor.add(color.black);
wendyColor.add(color.grey);

let wendyResto = new Set();
wendyResto.add(restaurant.tempura);
wendyResto.add(restaurant.bento);
wendyResto.add(restaurant.sushi);
wendyResto.add(restaurant.pancake);
wendyResto.add(restaurant.padang);
wendyResto.add(restaurant.katsu);
wendyResto.add(restaurant.geprek);
wendyResto.add(restaurant.pancake);
wendyResto.add(restaurant.eggy);

let wendyEducation = [{ name: "SD 02", city: "Jakarta", graduate: "2010" },
                       { name: "SMP 03", city: "Bogor", graduate: "2013" },
                       { name: "SMA 01", city: "Surabaya", graduate: "2016" },
                       { name: "Universitas Maju", city: "Tangerang" },
                    ]

// Start Test
let mapFirstUser = [];
monicaEducation.forEach(function (item, index){
    const dataFirstUser = {
        name: "Monica",
        gender: "female",
        age: "17",
        email: "monica@dingdong.com",
        favoriteColor: [...monicaColor],
        isHavePet: "Yes",
        education: ((item.name)?'nama :'+ item.name:'')+ ((item.city)?', city : '+item.city:'')+((item.graduate)?', graduate : '+item.graduate:''),
        favoriteRestaurant: [...monicaResto],
    }
    mapFirstUser.push(dataFirstUser)
})

let mapSecondtUser = [];
wendyEducation.forEach(function (item, index){
    const dataSecondtUser = {
        name: "Wendy",
        gender: "male",
        age: "23",
        email: "wendy@dingdong.com",
        favoriteColor: [...wendyColor],
        isHavePet: "No",
        education: ((item.name)?'nama :'+ item.name:'')+ ((item.city)?', city : '+item.city:'')+((item.graduate)?', graduate : '+item.graduate:''),
        favoriteRestaurant: [...wendyResto],
    }
    mapSecondtUser.push(dataSecondtUser)
})

const firstUser = mapFirstUser
const secondUser =  mapSecondtUser

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};