import { ref } from 'vue';
import { defineStore } from 'pinia'

export const menuStore = defineStore('menu', () => {

const menu_list = ref([
  {
    name: 'มัทฉะลาเต้',
    img: 'https://image.bestreview.asia/wp-content/uploads/2022/12/smoothie-menu-1.jpg',
    price: 45,
    caption: 'ลองแล้วรักมัทฉะลาเต้ รสชาติที่ไม่เหมือนใคร!'
  },
  {
    name: 'ชาไทย',
    img: 'https://image.bestreview.asia/wp-content/uploads/2022/12/thai-tea.jpg',
    price: 40,
    caption: 'รสชาติเข้มข้นและหอมหวานของชาไทย เป็นความอร่อยที่คุณต้องลอง!'
  },
  {
    name: 'ลาเต้',
    img: 'https://image.bestreview.asia/wp-content/uploads/2022/12/Latte-Frappe.jpg',
    price: 40,
    caption: 'ลาเต้เราคือรสชาติของความเป็นความหรูหราที่คุณต้องลอง!'
  },
  {
    name: 'โฮจิฉะถั่วแดง',
    img: 'https://image.bestreview.asia/wp-content/uploads/2022/12/Hojicah.jpg',
    price: 50,
    caption: 'ทำให้วันของคุณเป็นวันพิเศษด้วยความอร่อยจากโฮจิฉะถั่วแดง!'
  },
  {
    name: 'โกโก้ปั่น',
    img: 'https://image.bestreview.asia/wp-content/uploads/2021/12/Cocoa-Shake-Cornflakes.jpg',
    price: 40,
    caption: 'โกโก้ปั่นที่มีรสชาตินุ่มนวลและหอมหวาน สำหรับความสุขที่ทันสมัย'
  },
  {
    name: 'สตรอว์เบอร์รี่โยเกิร์ต',
    img: 'https://image.bestreview.asia/wp-content/uploads/2022/12/smoothie-menu-2.jpg',
    price: 50,
    caption: 'เพลิดเพลินกับรสชาติสตรอว์เบอร์รี่สดๆ และความครีมมี่ของโยเกิร์ตที่พิเศษ'
  },
  {
    name: 'มิกซ์เบอร์รี่โยเกิร์ต',
    img: 'https://image.bestreview.asia/wp-content/uploads/2022/12/Mixed-Berry-Yogurt.jpg',
    price: 50,
    caption: 'เพลิดเพลินกับการผสมรสชาติสตรอว์เบอร์รี่สดและความครีมมี่ของโยเกิร์ตในแก้วเดียว!'
  },
  {
    name: 'นมเปรี้ยวปีโป้ปั่น',
    img: 'https://image.bestreview.asia/wp-content/uploads/2021/08/best-fermented-milk-ex-01.jpg',
    price: 55,
    caption: 'สัมผัสความสดชื่นและรสชาตินมเปรี้ยวปีโป้ปั่นที่อร่อยไม่หยุดนิ่ง กับเราทุกวัน!'
  },
  {
    name: 'ช็อกโกแลตมิลค์เชค',
    img: 'https://image.bestreview.asia/wp-content/uploads/2022/12/smoothie-menu-3.jpg',
    price: 50,
    caption: 'นวลนุ่มและหอมหวาน ช็อกโกแลตมิลค์เชคของเราทำให้คุณรู้สึกพิเศษทุกวัน'
  },
  {
    name: 'โอริโอ้ปั่น',
    img: 'https://image.bestreview.asia/wp-content/uploads/2022/12/Oreo.jpg',
    price: 45,
    caption:
      'โอริโอ้ปั่นที่มีรสชาติเข้มข้นและหอมหวานที่สุด สำหรับความสนุกและความหอมหวานที่ถูกใจทุกคน'
  },
  {
    name: 'น้ำมะม่วงนมสด',
    img: 'https://image.bestreview.asia/wp-content/uploads/2022/05/menus-from-mango-5.jpg',
    price: 50,
    caption: 'ลองแล้วคุณจะติดใจในความอร่อยและความสดชื่นของน้ำมะม่วงนมสดของเราที่ไม่เหมือนใคร'
  },
  {
    name: 'มะพร้าวปั่นนมสดแมงลัก',
    img: 'https://image.bestreview.asia/wp-content/uploads/2022/12/coconut-smoothie.jpg',
    price: 55,
    caption: 'รับรสชาติความหอมหวานและความเย็นสดชื่นในแก้วมะพร้าวปั่นนมสดแมงลักของเรา!'
  }
])

return { menu_list }
})