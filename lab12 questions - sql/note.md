主键 每一行唯一标识，通常自增加int(unique + not null)
外键 建立表和表之间的关系的字段

例如：product table -> (product_id(主键), product_name...)
	 order_table -> (order_id(主键), costomer_id, product_id(外键 array 因为包含多个产品)...)  这里的product_id就是外键
	 