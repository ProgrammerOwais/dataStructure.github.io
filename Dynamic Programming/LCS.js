/*#################### Longest Common Subsequence ###################################
https://www.simplilearn.com/tutorials/data-structure-tutorial/longest-common-subsequence
https://www.geeksforgeeks.org/longest-common-subsequence-dp-4/
 A subsequence is nothing but a series of elements that occur in the 
 same order but are not necessarily contiguous. Suppose, A and B are two
 given sequences consisting of a finite set of characters. Then, we can 
 say that C is a common subsequence of both A and B, if and only if C can 
 be derived from A and B.
 Example let say s1 = ABCDEF
                 s2 = DEFGHI

                 the commont btw s1 & S2 is "D","E","F","DE","DF""Ef","DEF"
From above the LCE is: DEF & size is: 3

###################### Implementation of LCE by using naive recursive method ##############*/
function max(a, b) {
  return a > b ? a : b;
}
function LCS(s1, s2, m, n) {
  if (m == 0 || n == 0) {
    return 0;
  }
  if (s1[m - 1] == s2[n - 1]) {
    return 1 + LCS(s1, s2, m - 1, n - 1);
  } else {
    return max(LCS(s1, s2, m, n - 1), LCS(s1, s2, m - 1, n));
  }
}
// Time complexity O(2^n)
let s1 = "AGGTAB";
let s2 = "GXTXAYB";
let m = s1.length;
let n = s2.length;
// console.log(LCS(s1, s2, m, n));

/*
Considering the above implementation, following is a partial recursion 
tree for input strings “AXYT” and “AYZX”

                                 lcs("AXYT", "AYZX")
                                /                  
                    lcs("AXY", "AYZX")            lcs("AXYT", "AYZ")
                           /                                  /             
            lcs("AX", "AYZX") lcs("AXY", "AYZ")   lcs("AXY", "AYZ") lcs("AXYT", "AY")

In the above partial recursion , (AXYT),(AYZX) is beig solved twice i.e overlapping &
also it contain optimal sub-structure means sub-structure solve sub- problems
so it follows the dynamic programming properties.

###################### Implementation of LCE by using Dynamic Programming approach ##############*/
function LCSdp(s1, s2, m, n, dp) {
  if (m == 0 || n == 0) {
    return 0;
  }
  if (s1[m - 1] == s2[n - 1]) {
    return (dp[m][n] = 1 + LCSdp(s1, s2, m - 1, n - 1, dp));
  }
  if (dp[m][n] != -1) {
    return [m][n];
  }
  return (dp[m][n] = max(
    LCSdp(s1, s2, m, n - 1, dp),
    LCSdp(s1, s2, m - 1, n - 1, dp)
  ));
}
// The time complexity is O(M*N) so it is efficient than a naive recursive method
let str1 = "AGGTAB";
let str2 = "GXTXAYB";
let str1Length = str1.length;
let str2Length = str2.length;
let dp = new Array(str1Length + 1);
for (let i = 0; i < str1Length + 1; i++) {
  dp[i] = new Array(str2Length + 1).fill(-1);
}
console.log(LCSdp(str1, str2, str1Length, str2Length, dp));
