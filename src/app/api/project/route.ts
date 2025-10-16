import { callGateway } from "@/app/(myapp)/lib/use-server";
import { Project } from "@/app/(myapp)/types/commons";
import { NextRequest, NextResponse } from "next/server";

const API_GATEWAY = process.env.API_GATEWAY || 'http://localhost:8083';
//use the basepath from the env
const BASEPATH_API_GATEWAY = process.env.BASEPATH_API_GATEWAY || '';
const GATEWAY_BASE_URL = `${API_GATEWAY}${BASEPATH_API_GATEWAY}`;

const ROUTE_BASE_URL =  `${GATEWAY_BASE_URL}/project`;


export async function GET(request: NextRequest) {
    try {
        const projectId = request.nextUrl.searchParams.get('uuid');
         const query = request.nextUrl.searchParams;

        if (projectId) {
            // Get specific project details by ID
            const projectDetails = await callGateway<Project>(`${ROUTE_BASE_URL}/${projectId}`, {
                method: 'GET',
            });
            return NextResponse.json(projectDetails);
        }
        const projects = await callGateway<Project[]>(`${ROUTE_BASE_URL}?${query.toString()}`, {
            method: 'GET',
        });
        return NextResponse.json(projects);

    } catch (error) {
        return NextResponse.json({ error: `Failed to fetch projects: ${error}` }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const project = await callGateway<Project>(`${ROUTE_BASE_URL}`, {
            method: 'POST',
            body: JSON.stringify(body),
        });
        return NextResponse.json(project);
    } catch (error) {
        return NextResponse.json({ error: `Failed to create project: ${error}` }, { status: 500 });
    }
}

export async function PUT(request: NextRequest) {
    try {
        const uuid = request.nextUrl.searchParams.get('uuid');
        const body = await request.json();
        const project = await callGateway<Project>(`${ROUTE_BASE_URL}/${uuid}`, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
        return NextResponse.json(project);
    } catch (error) {
        return NextResponse.json({ error: `Failed to update project: ${error}` }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const uuid = request.nextUrl.searchParams.get('uuid');

        if (!uuid) {
            return NextResponse.json({ error: 'UUID is required' }, { status: 400 });
        }
        await callGateway(`${ROUTE_BASE_URL}/${uuid}`, { method: 'DELETE' });
        return NextResponse.json({ message: 'Project deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: `Failed to delete project: ${error}` }, { status: 500 });
    }
}

