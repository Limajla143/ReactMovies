﻿using MoviesAPI.Validations;
using System.ComponentModel.DataAnnotations;

namespace MoviesAPI.Entities
{
    public class Genre
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "The field with name {0} is required")]
        [StringLength(10)]
        [FirstLetterUppercase]
        public string Name { get; set; }

        //public IEnumerable<ValidationResult> Validate(ValidationContext validationContext)
        //{
        //    if(!string.IsNullOrEmpty(Name))
        //    {
        //        var firstLetter = Name[0].ToString();

        //        if(firstLetter != firstLetter.ToUpper())
        //        {
        //            yield return new ValidationResult("First letter should be uppercase", new string[] {nameof(Name)});
        //        }
        //    }
        //}

    }
}
