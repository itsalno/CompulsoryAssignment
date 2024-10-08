using DataAccess.Models;

namespace DataAccess.Interfaces;

public interface IOrderRepository
{
    List<Order> GetAllOrders();
    Order GetOrderByCustomerId(int id);
    Order CreateOrder(Order order);
    void UpdateOrder(Order order);


}