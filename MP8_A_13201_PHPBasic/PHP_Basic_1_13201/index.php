<?php
    echo "<h1>Hobi</h1>";
    echo '<Form method="POST" action="">
            <p>Nama : <br /><input type="text" name="nama"/></p>
            <p>NPM  : <br /><input type="text" name="npm"/></p>
            <p>Hobi : <br /><input type="text" name="hobi"/></p>
            <button type="submit">Kirim</button>
        </form>';
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        $nama = $_POST['nama'];
        $npm = $_POST['npm'];
        $hobi = $_POST['hobi'];
        echo " hobi " .htmlspecialchars($nama). " / ". htmlspecialchars($npm). " adalah ". htmlspecialchars($hobi);
    }else{
        echo "silahkan isi formulir di atas untuk mengerimkan data hobi anda!";
    }
?>
            