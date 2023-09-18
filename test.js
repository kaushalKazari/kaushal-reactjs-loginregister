let requiredObj = [
    {
        id:1,
        name:'Anil',
        createdAt:'123'
    },
    {
        id:2,
        name:'Rakesh',
        createdAt:'3658'
    }
]

let oldaroo = [
    {
        "id": 2,
        "attributes": {
            "name": "Sunil",
            "createdAt": "2023-09-18T03:27:26.079Z",
            "updatedAt": "2023-09-18T03:27:27.035Z",
            "publishedAt": "2023-09-18T03:27:27.033Z"
        }
    },
    {
        "id": 3,
        "attributes": {
            "name": "Rakesh",
            "createdAt": "2023-09-18T03:34:56.859Z",
            "updatedAt": "2023-09-18T03:34:56.859Z",
            "publishedAt": "2023-09-18T03:34:56.857Z"
        }
    },
    {
        "id": 4,
        "attributes": {
            "name": "Kaushal",
            "createdAt": "2023-09-18T03:37:31.696Z",
            "updatedAt": "2023-09-18T03:37:31.696Z",
            "publishedAt": "2023-09-18T03:37:31.695Z"
        }
    }
]
console.log('before -> ', oldaroo)

let newOldAoo = oldaroo.map((cv,idx,arr)=>{
    return {
        id:cv.id,
        name:cv.attributes.name,
        createdAt:cv.attributes.createdAt
    };
})

console.log('after -> ', newOldAoo)