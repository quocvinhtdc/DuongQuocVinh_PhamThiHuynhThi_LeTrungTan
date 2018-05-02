<?php
require "config.php";
class db{

	//tao bien ket noi
	public static $conn;
	//1.Ket noi trong ham construct
	public function __construct(){
		self::$conn = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);
		//hien thi tieng viet
		self::$conn->set_charset('utf8');
	}


	// lấy ra tất cả sản phẩm
	public function getAllProduct($page, $per_page)
 	{
 		// viet cau try van
 		$first_link = ($page - 1) * $per_page;
		$sql = "SELECT * FROM products LIMIT $first_link, $per_page";
 		// thuc hien truy van
 		$result = self::$conn->query($sql);
 		// chuyen oj thanh mang
 		$arr = array();
 		while($row = $result->fetch_assoc()) 
 		{
 			$arr[]  = $row;
 		}

 		return $arr;
 	}


	// tong per page
	public function getRow($page, $per_page)
	{
		// Tính số thứ tự trang bắt đầu
		$sql = "SELECT * FROM Products ";

		$result = self::$conn->query($sql);
		return $result->num_rows;
	}


	// ham phan trang
	public function create_links ($base_url, $total_rows, $page, $per_page)
	{
		$total_links = ceil($total_rows/$per_page);
		$link ="";
		for($j=1; $j <= $total_links ; $j++)
		{

			// chu dam ai trang hien hanh
			if($j == $page)
			{
				$link = $link."<a class = 'active-2' href='".$base_url."?page=$j'> $j </a>";					
			}
			else
			{
				$link = $link."<a href='".$base_url."?page=$j'> $j </a>";
			}
			
		}
		return $link;
	}

	// cout search
 	public function countSearch($key)
 	{
 		// viet cau try van
 		$sql = "SELECT * FROM products WHERE name LIKE '%".$key."%'";
 		// thuc hien truy van
 		$result = self::$conn->query($sql);
 		// chuyen oj thanh mang
 		return $result->num_rows;
 	}

	public function Search($key, $page, $per_page)
 	{
 		$first_link = ($page - 1) * $per_page;
 		// viet cau try van
 		$sql = "SELECT * FROM products WHERE name LIKE '%".$key."%' LIMIT $first_link, $per_page ";
 		// thuc hien truy van
 		$result = self::$conn->query($sql);
 		// chuyen oj thanh mang
 		$arr = array();
 		while($row = $result->fetch_assoc())
 		{
 			$arr[]  = $row;
 		}
 		return $arr;

 	}

 	public function theLoai(){
		//2. viet cau truy van
		$sql="SELECT * FROM nameproduct";
		//3.Thuc thi cau truy van
		$result = self::$conn->query($sql);
		//4.Chuyen object thanh mang
		$arr = array();
		while($row = $result->fetch_assoc()){
			$arr[] = $row;
		}
		return $arr;
	}

	// lay ra ten product
	public function nameProduct(){
		//2. viet cau truy van
		$sql="SELECT * FROM nameproduct" ;
		//3.Thuc thi cau truy van
		$result = self::$conn->query($sql);
		//4.Chuyen object thanh mang
		$arr = array();
		while($row = $result->fetch_assoc()){
			$arr[] = $row;
		}
		return $arr;
	}




	public function getIdProduct($page, $per_page, $theLoai)
 	{
 		// viet cau try van
 		$first_link = ($page - 1) * $per_page;
		$sql = "SELECT * FROM products WHERE idType=$theLoai LIMIT $first_link, $per_page";
 		// thuc hien truy van
 		$result = self::$conn->query($sql);
 		// chuyen oj thanh mang
 		$arr = array();
 		while($row = $result->fetch_assoc()) 
 		{
 			$arr[]  = $row;
 		}

 		return $arr;
 	}


	//5.Dong ket noi
	public function __destruct(){
		self::$conn->close();
	}
}