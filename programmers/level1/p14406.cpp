#include <vector>
#include <iostream>

using namespace std;

// 소수인지 아닌지 저장할 배열 선언
bool* PrimeArray;

void eratos(int n) {
    /*  만일 n이 1보다 작거나 같으면 함수 종료 */
    if (n <= 1) return;

	/*  배열초기화: 처음엔 모두 소수로 보고 true값을 줌	*/
	for (int i = 2; i <= n; i++) 
	    PrimeArray[i] = true;
	    
	/*	에라토스테네스의 체에 맞게 소수를 구함
		만일, PrimeArray[i]가 true이면 i 이후의 i 배수는 약수로 i를 
		가지고 있는 것이 되므로 i 이후의 i 배수에 대해 false값을 준다.
		PrimeArray[i]가 false이면 i는 이미 소수가 아니므로 i의 배수 역시
		소수가 아니게 된다. 그러므로 검사할 필요도 없다.	*/
	for (int i = 2; i * i <= n; i++)
	{
		if (PrimeArray[i])
			for (int j = i * 2; j <= n; j += i)
			    PrimeArray[j] = false;
	}
}

long long solution(int N) {
    long long answer = 0;
    PrimeArray = new bool[N + 1];
    eratos(N);
    for(int i=2; i<=N; i+=1) {
        if(PrimeArray[i] == true) { //소수일 때만 정답에 더해준다.
            answer += i;
        }
    }
    return answer;
}