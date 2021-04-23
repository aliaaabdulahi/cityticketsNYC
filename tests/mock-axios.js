import MockAdapter from "axios-mock-adapter";
import axios from "axios";
const mock = new MockAdapter(axios);
const app = require("../server");
const agent = require("supertest")(app);

export const anHourFromNow = new Date(Date.now() + 60 * (60 * 1000)).toString();
const mockProducts = [
  { id: 1, description: "Build barn", image: "image.png", price: "12.22" },
  { id: 2, description: "Discover love", image: "image.png", price: "12.22" },
  {
    id: 3,
    description: "Open the pod bay doors",
    image: "image.png",
    price: "12.22",
  },
];

const mockUsers = [
  { id: 1, name: "R2-D2" },
  { id: 2, name: "WALL-E" },
];

beforeEach(() => {
  // Mock GET /api/products => all products
  mock.onGet("/api/products").reply(200, mockProducts);

  // Mock GET /api/projects => all users
  // mock.onGet("/api/users").reply(200, mockUsers);

  // Mock GET /api/robots/:id => single robot with matching id
  mock.onGet(/\/api\/products\/\d+/).reply((config) => {
    const urlArr = config.url.split("/");
    const id = Number(urlArr.slice(-1)[0]);
    const product = mockProducts.find((pro) => pro.id === id);
    return [200, product];
    //product ?
    //[200, product]
    //: [404];
  });

  // Mock GET /api/projects/:id => single project with matching id
  // mock.onGet(/\/api\/users\/\d+/).reply((config) => {
  //   const urlArr = config.url.split("/");
  //   const id = Number(urlArr.slice(-1)[0]);
  //   const users = mockUsers.find((user) => user.id === id);
  //   return users ? [200, user] : [404];
  // });

  // If something in the tests doesn't match one of the above routes,
  // use a supertest agent to use the actual API
  mock.onAny().reply(async (req) => {
    const response = await agent[req.method](req.url, req.data);
    return [response.status, response.body];
  });
});

afterEach(() => mock.reset());

export default mock;
