// Simple API routes for portfolio management
import { NextRequest, NextResponse } from 'next/server';
import { Portfolio } from '@/types/portfolio';

// This would connect to your preferred database (MongoDB, PostgreSQL, etc.)
// For demo purposes, I'm showing the structure

export async function GET(request: NextRequest) {
  try {
    // In production, fetch from your database
    // const portfolioData = await db.portfolio.findFirst();
    
    // For now, return the static data
    const { portfolioData } = await import('@/data/portfolio');
    
    return NextResponse.json({
      success: true,
      data: portfolioData
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch portfolio data' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const updatedData: Portfolio = await request.json();
    
    // Validate the data structure
    if (!updatedData.personalInfo || !updatedData.projects) {
      return NextResponse.json(
        { success: false, error: 'Invalid portfolio data structure' },
        { status: 400 }
      );
    }
    
    // In production, save to your database
    // await db.portfolio.upsert({
    //   where: { id: 1 },
    //   update: updatedData,
    //   create: updatedData
    // });
    
    // For demo, we'll save to a JSON file (not recommended for production)
    const fs = await import('fs/promises');
    const path = await import('path');
    
    const filePath = path.join(process.cwd(), 'src/data/portfolio-backup.json');
    await fs.writeFile(filePath, JSON.stringify(updatedData, null, 2));
    
    return NextResponse.json({
      success: true,
      message: 'Portfolio data updated successfully'
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update portfolio data' },
      { status: 500 }
    );
  }
}