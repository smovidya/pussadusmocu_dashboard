import React, { useState, useEffect } from 'react';

export const NewestParcel: React.FC = () => {
  const [parcels, setParcels] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://ap-southeast-1.data.tidbcloud.com/api/v1beta/app/dataapp-LiqmsgWG/endpoint/newestborrowed?project_id=allproject', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa('41IEI650:474f20d5-86a2-43ba-8454-25497a689893')}`,
          },
          
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setParcels(result.data.rows);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-[380px] h-[640px] p-8 bg-white rounded-lg shadow-md text-xs">
  <h2 className="text-xl font-bold mb-2">Newest Parcel</h2>
  <p className="text-gray-600 mb-4">Newest Parcel that was borrowed</p>
  
  <div className="w-full h-[500px] rounded-lg overflow-y-auto">
    <table className="w-full bg-white border-b border-gray-300 table-auto">
      <thead>
        <tr className="text-gray-400 font-normal text-xs">
          <th className="border-b px-4 py-2 text-center">Project</th>
          <th className="border-b px-4 py-2 text-center">Parcel</th>
          <th className="border-b px-4 py-2 text-center">Amount</th>
        </tr>
      </thead>
      <tbody className='max-h-[480px]'>
        {parcels.length > 0 ? (
          parcels.map((parcel: any, index: number) => (
            <tr key={index} className="hover:bg-gray-100 text-xs">
              <td className="border-b px-4 py-2 text-center">{parcel.Project_title}</td>
              <td className="border-b px-4 py-2 text-center">{parcel.Parcel_title}</td>
              <td className="border-b px-4 py-2 text-center">{parcel.amount}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3} className="border px-4 py-2 text-center">No parcels available</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

  );
};
