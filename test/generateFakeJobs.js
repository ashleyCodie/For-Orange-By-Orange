import { faker, fakerEN_US } from "@faker-js/faker"

const generateFakeJob = () => {
   const firstName = faker.person.firstName()
   const lastName = faker.person.lastName()
//    const city = fakerEN_US.location.city()
const city = "Phoenix"
//    const state = fakerEN_US.location.state({ abbreviated: true })
const state = "AZ"
   const logo = "handcuffs.png"
   const jobTitle = "Customer Service Representative"

return {
    // jobTitle: faker.person.jobTitle(),
    jobTitle: jobTitle,
    companyName: faker.company.name(),
    contact: firstName + " " + lastName,
    email: faker.internet.email({ firstName, lastName }),
    website: faker.internet.url() ,
    phone: faker.phone.number({ style: 'national' }),
    salary: faker.finance.amount({ min: 40000, max: 100000, symbol: '$' }),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    requirements: faker.lorem.sentences(1),
    location: city + ", " + state,
    logo: logo

   
}
}

export const generateFakeJobs = (length) => {
    const jobs = []
    Array.from({ length: length }).forEach(() => {
        jobs.push(generateFakeJob())
    })
    return jobs
}

// jobTitle: "",
// companyName: "",
// contact: "",
// email: "",
// website: "",
// phone: "",
// description: "",
// requirements: "",
// salary: "",
// logo: ""