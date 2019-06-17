#include <iostream>

using namespace std;

int cal(int N, int M)
{
	int ret = 0;

	while (N > 1 && M > 0)
	{
		ret++;
		N -= 2;
		M -= 1;
	}

	return ret;
}

int main()
{
	int N, M, K;
	cin >> N >> M >> K;

	while (K > 0)
	{
		if (N > 2 * M)
			N--;
		else
			M--;
		K--;
	}

	int ret = cal(N, M);
	cout << ret << endl;

	return 0;
}