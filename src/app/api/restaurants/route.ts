export async function GET() {
    try {
        const response = await fetch(
            "https://data.taipei/api/v1/dataset/d706f428-b2c7-4591-9ebf-9f5cd7408f47?scope=resourceAquire&limit=500"
        );
        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        return Response.error();
    }
}
