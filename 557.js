var n = prompt("n:");
		var prime = new Array();
		
		for (var i = 0; i <= n; ++i) {
			prime.push(true);
		}
		prime[0] = false;
		prime[1] = false;
		
		for (var i=2; i<=n; i++)
{
  if (prime[i])
  {  
    for (var k=2; i*k<=n; k++)
    {
      prime[i*k] = false;
    }
  }  
}
		var ans = new Array();
		for (var i = 2; i <= n; ++i) {
			if (prime[i]) {
				ans.push(i);
			}
		}
		
		alert(ans);
