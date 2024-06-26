import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        todos: [
            {
                id: 1,
                name: 'ORANGE SUPERMARCHE BAG',
                description: "THE LARGE EVERYDAY TOTE IS A TECHNIC CANVAS TOTE BAG THAT’S LIGHTWEIGHT, DURABLE AND WATER RESISTANT.",
                price: 500,
                image: require("../assets/bag2.jpg")
            },
            {
                id: 2,
                name: 'BLUE SUPERMARCHE BAG',
                description: "THE LARGE EVERYDAY TOTE IS A TECHNIC CANVAS TOTE BAG THAT’S LIGHTWEIGHT, DURABLE AND WATER RESISTANT.",
                price: 400,
                image: require("../assets/bag3.jpg")
            },
            {
                id: 3,
                name: 'NAVY SUPERMARCHE BAG',
                description: "THE LARGE EVERYDAY TOTE IS A TECHNIC CANVAS TOTE BAG THAT’S LIGHTWEIGHT, DURABLE AND WATER RESISTANT.",
                price: 400,
                image: require("../assets/bag4.jpg")
            },
            {
                id: 4,
                name: 'FOREST GREEN SUPERMACHE BAG',
                description: "THE LARGE EVERYDAY TOTE IS A TECHNIC CANVAS TOTE BAG THAT’S LIGHTWEIGHT, DURABLE AND WATER RESISTANT.",
                price: 600,
                image: require("../assets/bag5.jpg")
            },
            {
                id: 5,
                name: 'MİLK YBROWN SUPERMARCHE BAG',
                description: "THE LARGE EVERYDAY TOTE IS A TECHNIC CANVAS TOTE BAG THAT’S LIGHTWEIGHT, DURABLE AND WATER RESISTANT.",
                price: 600,
                image: require("../assets/bag6.jpg")
            },
            {
                id: 6,
                name: 'CHOCALAT PELIT LIDO SUPERMARCHE BAG',
                description: "THE LARGE EVERYDAY TOTE IS A TECHNIC CANVAS TOTE BAG THAT’S LIGHTWEIGHT, DURABLE AND WATER RESISTANT.",

                price: 600,
                image: require("../assets/bag7.jpg")
            }
        ],
        filteredList: [],
        ball: [],
        totalCount:0
    },
    reducers: {
        addİtem: (state, action) => {
            state.filteredList = action.payload
        },
        addBall: (state, action) => {
            const itemBall = action.payload;
            const existingBall = state.ball.find(ball => ball.id === itemBall.id);

            if (existingBall) {
                existingBall.price += itemBall.price;
                existingBall.count = (existingBall.count || 0) + 1;
            } else {
                state.ball.push({ ...itemBall, count: 1 });
            }
            state.totalCount += itemBall.price;
        }
    }
})
export const { addİtem, addBall } = productSlice.actions
export default productSlice.reducer

