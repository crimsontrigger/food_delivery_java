import {insert_into_db,query_from_db} from 'mongo_db'
import {A_MENU_ITEMS,C_MENU_ITEMS,ITEMS_VAR} from 'constants'
//returns a mess menu
function a_menu(){
    let message_table = {};
    message_table[ITEMS_VAR] = Object.keys(A_MENU_ITEMS);
    return message_table
}

//returns c mess menu
function c_menu(){
    let message_table = {};
    message_table[ITEMS_VAR] = Object.keys(C_MENU_ITEMS);
    return message_table
}

function order_dets(params){
    let message_table = {};
    //reads params from UI
    let menu_name = params['menu'];
    let items_list = params[ITEMS_VAR];

    let order_val = cost_calc(items_list,menu_name);
    
    let order_id = order_id_gen();
    
    message_table['initial_cost'] = order_val[0];
    message_table['final_cost'] = order_val[1];
    message_table['deliver_charge'] = 10;
    message_table['packing_charge'] = order_val[2] * 5;
    message_table['order_id'] = order_id;

    insert_into_db(message_table,'order_details');

    return message_table
}

function cost_calc(items_list,menu_name) {
    //checks which mess
    if (menu_name === 'a_menu'){
        let menu_list = A_MENU_ITEMS;
    }else{
        let menu_list = C_MENU_ITEMS;
    }
    let initial_cost = 0;
    let pack_quantity = 0;

    //loops through each item ordered by user and adds corresponding cost
    for (let i =0;i<items_list.length;i++){
        let item_name = items_list[i][0];
        let item_quan = items_list[i][1];
        let initial_cost = menu_list[item_name] * item_quan;
        if (item_name === 'Veg Triple Rice (Rs.55)'){
            pack_quantity = (item_quan*2) + pack_quantity;
        }else{
            pack_quantity = item_quan + pack_quantity;
        }
    }
    let final_cost = initial_cost + (pack_quantity * 5) + 10;
    return [initial_cost,final_cost,pack_quantity]
}

function order_id_gen() {
    let order_id = 0;
    for (let i = 1;i<150;i++){
        let order_id_list = query_from_db({order_id:i},'order_ids');
        if (order_id_list.length === 1){
            order_id = i + 1;
            break;
        } else {
            order_id = 1;
        }
    }
    return order_id
}
