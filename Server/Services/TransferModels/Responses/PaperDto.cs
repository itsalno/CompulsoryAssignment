using DataAccess.Models;

namespace Services.TransferModels.Responses;

public class PaperDto
{
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public bool Discontinued { get; set; }
        public int Stock { get; set; }
        public double Price { get; set; }

        public static PaperDto FromEntity(Paper paper)
        {
            return new PaperDto
            {
                Id = paper.Id,
                Name = paper.Name,
                Discontinued = paper.Discontinued,
                Stock = paper.Stock,
                Price = paper.Price
            };
        }

        public Paper ToEntity()
        {
            return new Paper
            {
                Id = Id,
                Name = Name,
                Discontinued = Discontinued,
                Stock = Stock,
                Price = Price
            };
        }
}