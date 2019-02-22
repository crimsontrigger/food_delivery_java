//returns a mess menu
function a_menu(){
    let message_table = {};
    message_table['items'] = Object.keys(A_MENU_ITEMS);
    return message_table
}

//returns c mess menu
function c_menu(){
    let message_table = {};
    message_table['items'] = Object.keys(C_MENU_ITEMS);
    return message_table
}

function order_dets(params){
    let message_table = {}
    menu_name = params['menu']
}

// constant dictionary containing values of a mess
const A_MENU_ITEMS = {
    'Veg Triple Rice (Rs.55)':55,
};

// contstant dictionary containing values of c mess
const C_MENU_ITEMS = {
    'Veg Triple Rice (Rs.55)':55,
};
