import vue from 'vue';
import {routes} from "../../../../routes";

const state={
    menuCategories:[],
    slides:[],
    recentBlogs:[],
    popularBlogs:[],
    hotelBlogs:[],
    campBlogs:[],
    activityBlogs:[],
    tourBlogs:[],
};
const getters={
    // getHomeSlides() {
    //     console.log("dwa")
    //     return state.slider;
    // }
};
const mutations={
    // addSlider(state,slide){
    //     state.slides.push(slide);
    // },
    // clearSlideList(state){
    //     state.slides=[];
    // },
};
const actions={
    // async getHomeSlide({commit}){
    //         commit("clearSlideList");
    //         await axios.get('/api/sliders/')
    //             .then(res =>{
    //                 let data=res.data;
    //                 for(let key in data){
    //                     commit("addSlider",data[key]);
    //                 }
    //             }).catch(e=>{
    //                 console.log(e.response.data)
    //             })
    //     },
    // async getCategories({commit}){
    //     await axios.get().then(res =>{
    //
    //     }).catch(e =>{
    //
    //     })
    // }
};
export default{
    state,
    getters,
    mutations,
    actions
}
