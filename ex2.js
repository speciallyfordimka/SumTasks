function fibonacci(n) { 
    if (n <= 1) { 
        return n; 
    } 
    return fibonacci(n - 1) + fibonacci(n - 2); 
} 

for (let i = 0; fibonacci(i) < 200; i++) {
    console.log(fibonacci(i));
};