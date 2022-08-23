#include <iostream>

using namespace std;

int main()
{

    int num, r, sum = 0;

    cout << "Please enter a number to reverse it. " << endl;
    cin >> num;
    cout << endl;
    int temp = num;

    while (temp > 0)
    {

        r = temp % 10;
        sum = sum * 10 + r;
        temp = temp / 10;
    }

    cout << sum << endl;
    return 0;
}

/// here it is working fine let's make it dynamic
// take input from user and reverse it

// Okay so it is dynamic now 
// if it is helped you in any way please do subscribe 

///THANKS 
