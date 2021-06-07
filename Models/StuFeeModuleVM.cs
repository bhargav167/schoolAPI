using System.Collections;
using System.Collections.Generic;

namespace sKul.API.Models
{
    public class StuFeeModuleVM
    {
        public IEnumerable<FeeParticular> feeParticular;
        public QuickAdmission quickAdmission { get; set; }
    }
}