using System.Collections;
using System.Collections.Generic;
using sKul.API.Models;

namespace sKul.API.Helper
{
   public class DistinctItemComparer:IEqualityComparer<Attendance>
    {
        public bool Equals(Attendance x, Attendance y)
        {
            return x.RollNo != y.RollNo;
        }
        
       public int GetHashCode(Attendance obj) {
        return obj.Id.GetHashCode() ^
            obj.Name.GetHashCode();
            
    }
    }
}