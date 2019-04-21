#include <string>
#include <vector>
#include <iostream>
#include <algorithm>

using namespace std;

string solution(vector<string> participant, vector<string> completion)
{
    sort(participant.begin(), participant.end());
    sort(completion.begin(), completion.end());
    int max = completion.size();
    for (int i = 0; i < max; i += 1)
    {
        if (participant[i] != completion[i])
            return participant[i];
    }
    return participant[participant.size() - 1];
}