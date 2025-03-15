## Q2

select
case
	when replacement_cost between 9.99 and 19.99 then 'low'
	when replacement_cost between 20.00 and 24.99 then 'medium'
	when replacement_cost between 9.99 and 19.99 then 'high'
end as cost_groudrop 
count(*)
from film f

group by cost_range

## Q3
select title, length, c.name
from film f
inner join film_category fc
on f.film_id = fc.film_id
inner join category c 
on c.category_id = fc.category_id
where c.name = 'Drama' or c."name" = 'Sports' -- where name in ('Drama', 'Sports')
order by length desc

## Q13
with pri as 
(select payment_id, name, amount
from payment p 
inner join rental r 
on r.customer_id = p.customer_id
inner join inventory i   
on r.inventory_id = i.inventory_id
inner join film_category fc  
on fc.film_id  = i.film_id
inner join category c 
on c.category_id = fc.category_id),

ns as 
(select name ns_name, sum(amount) sa
from pri
group by name)

select *, (select sa from ns where ns_name = pri.name) as total_amount
from pri
order by name, payment_id