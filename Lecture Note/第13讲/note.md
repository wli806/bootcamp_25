select
flight_id,
coalesce(flights.actual_departure, current_date)
from
flights

COALESCE 输出非null参数,靠前的参数优先
COALESCE (actual_arrival, scheduled_arrival)


CAST 转换数据类型
CAST (scheduled_arrival AS VARCHAR)
把scheduled_arrival转换成VARCHAR,只在提取使用的时行修改,不对源文件进行修改

REPLACE 进行替换
REPLACE (flight_no, 'PG', 'FL')
大小写强制匹配

INNER JOIN 取交集, 两个表都有的key才会显示在join之后的表中，INNER JOIN会进行去重
select 
*
from 
aircrafts_data ad
inner join 
sets s
on s.aircraft_code = ad.aircraft_code  -> 这里就是两个表都要有的key

OUTER JOIN 取并集，

LEFT JOIN
RIGHT JOIIN



correlated subqueries
select
name,
sales,
city
from employees
where sales > (select AVG(sales) from employees)