#include <iostream>
#include <string>
using namespace std;

int main(void)
{
	string str;
	for (int i = 0; i < 100 && !cin.eof(); i++) {
		getline(cin, str);
		cout << str << "\n";
	}
	return 0;
}