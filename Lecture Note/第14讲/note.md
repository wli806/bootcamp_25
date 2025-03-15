### cross join

select 
t1.column1,
t2.column1
from
table1 t1
cross join
table2 t2

### natural join 
> 自行找到相同的columns, with the same column name. 这里有个问题是两个create date这种字段如果自行join的话，那可能会产生异议
select
*
from
payment
natural left join 
costomer

### user defined functions
- extend functionality
- complex custom calculations

```
x

```