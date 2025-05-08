using System;

class Program
{
    const int MAX = 100;

    static int Sum(int[] arr)
    {
        // Use LINQ for simplicity and readability
        return arr.Sum();
    }

    static int[] GetInputArray(int n)
    {
        int[] arr = new int[n];
        Console.WriteLine($"Enter {n} integers:");
        for (int i = 0; i < n; i++)
        {
            while (true)
            {
                Console.Write($"Enter integer {i + 1}: ");
                if (int.TryParse(Console.ReadLine(), out arr[i]))
                {
                    break;
                }
                Console.WriteLine("Invalid input. Please enter a valid integer.");
            }
        }
        return arr;
    }

    static int GetNumberOfElements()
    {
        while (true)
        {
            Console.Write($"Enter the number of elements (1-{MAX}): ");
            if (int.TryParse(Console.ReadLine(), out int n) && n >= 1 && n <= MAX)
            {
                return n;
            }
            Console.WriteLine($"Invalid input. Please provide a number between 1 and {MAX}.");
        }
    }

    static void Main()
    {
        int n = GetNumberOfElements();
        int[] arr = GetInputArray(n);
        int total = Sum(arr);
        Console.WriteLine($"Sum of the numbers: {total}");
    }
}