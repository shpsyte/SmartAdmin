﻿using Smart.Core.Domain.Base;
using Smart.Core.Domain.Deals;
using System;
using System.Collections.Generic;
using System.Text;

namespace Smart.Core.Domain.Files
{
    public partial class DealFile : BaseEntity
    {
        public int Id { get; set; }
        
        public int FileId { get; set; }
        public int DealId { get; set; }

        public virtual Deal Deal { get; set; }
        public virtual File File { get; set; }

      
    }
}
