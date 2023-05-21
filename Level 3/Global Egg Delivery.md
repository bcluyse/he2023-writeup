```
h￾攀﻿2￾　﻿2￾㌀﻿{￾甀﻿7￾鈁﻿_￾戀﻿0￾洀﻿5￾猀﻿_￾㠀﻿r￾﻿_￾渀﻿0￾㜀﻿_￾㠀﻿ㅣ￾眀﻿a￾礀﻿5￾开﻿1￾最﻿n￾　﻿r￾﻿d￾紀
```

So it seems certain symbols have been encoded in different ways. 

Of course, we know that the flag will be of the form he2023{....}

```
h\ufffe攀\ufeff2\ufffe\u3000\ufeff2\ufffe㌀\ufeff{\ufffe甀\ufeff7\ufffe鈁\ufeff_\ufffe戀\ufeff0\ufffe洀\ufeff5\ufffe猀\ufeff_\ufffe㠀\ufeffr\ufffe\uf115\ufeff_\ufffe渀\ufeff0\ufffe㜀\ufeff_\ufffe㠀\ufeffㅣ\ufffe眀\ufeffa\ufffe礀\ufeff5  
\ufffe开\ufeff1\ufffe最\ufeffn\ufffe\u3000\ufeffr\ufffe\uf115\ufeffd\ufffe紀
```

In xxd, we can see the hex of the challenges, if we invert the order of the bytes for all of the special characters, we get

`he2023{u7ƒ_b0m5s_8rᗱ_n07_8ㅣway5_1gn0rᗱd}`